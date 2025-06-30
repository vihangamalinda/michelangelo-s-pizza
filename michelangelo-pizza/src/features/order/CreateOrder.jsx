/* eslint-disable no-unused-vars */
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import {getCart,clearCart, getTotalPrice} from '../cart/cartSlice';
import store from '../../store'
import { useState } from 'react';
import { formatCurrency } from '../../utilities/helpers';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const  totalOrderPrice = useSelector(getTotalPrice);
  const prioritizeCharge = withPriority ? totalOrderPrice * 0.2 : 0;
  const totalPrice = totalOrderPrice + prioritizeCharge;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-56">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input-custom grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-56">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="input-custom w-full grow"
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-xl bg-red-200 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-56">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input-custom w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" isDisabled={isSubmitting}>
            {isSubmitting ? 'Placing order ...' : `Order now for: ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data)
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority && data.priority == 'true',
  };
  // console.log(order);

  const error = {};
  if (!isValidPhone(order.phone)) {
    error.phone = ' Please give us our number to contact if needed.';
  }

  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart())
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
