import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitOrder } from "../../Features/orderSlice";

// Mock map component (replace with an actual interactive map like Leaflet or Google Maps)
const Map = ({ onSelectLocation }) => {
  const handleMapClick = (e) => {
    // Simulate fetching a clicked address (in real use, integrate with map API)

    const fakeAddress = "123 Mock Street, Example City, USA";
    onSelectLocation(fakeAddress);
  };

  return (
    <div
      onClick={handleMapClick}
      className="h-64 bg-blue-600 rounded-md flex items-center justify-center cursor-pointer"
    >
      <p className="text-white font-bold text-lg">
        Click on Map to Select Address
      </p>
    </div>
  );
};

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track current step
  const [locationTab, setLocationTab] = useState("current"); // Track selected location tab
  const [scheduleTab, setScheduleTab] = useState("morning"); // Track selected schedule tab
  const [selectedSlot, setSelectedSlot] = useState(""); // Track selected schedule slot
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(""); // Selected payment method
  const [paymentMethods, setPaymentMethods] = useState([
    "Cash on Delivery",
    "Bitcoin",
    "LazyPay",
  ]); // Default payment options
  // const [orderedDetails, setOrderedDetails] = useState({
  //   vehicle: "",
  //   location: "",
  //   schedule: "",
  //   payment: "",
  // });

  const cart = useSelector((state) => state.carts);
  const { item, totalPrice, totalCount } = cart;
  console.log(item, totalPrice);

  // Mock vehicle and schedule info
  const vehicleInfo = item.map((itm) => itm.name + ", ");
  const scheduleInfo = "No schedule selected";

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev < 4 ? prev + 1 : prev));
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    const shippingDetails = {
      location: selectedAddress,
      schedule: selectedSlot,
      payment: selectedPayment,
    };
    alert(
      `Payment Confirmed: ${selectedPayment}\nTotal Cost: $${(
        totalPrice +
        totalPrice * 0.05 +
        totalPrice * 0.08
      ).toFixed(2)}`
    );
    dispatch(submitOrder({ cart, shippingDetails }));

    navigate("/profile");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
        {/* Stepper */}
        <div className="flex justify-between">
          {["Vehicle", "Location", "Schedule", "Payment"].map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full ${
                    currentStep > index
                      ? "bg-primary text-gray-900"
                      : currentStep === index + 1
                      ? "bg-white text-black"
                      : "border-2 border-gray-400 text-gray-400"
                  } flex items-center justify-center text-sm font-semibold`}
                >
                  {index + 1}
                </div>
                <span className="text-sm text-gray-300">{step}</span>
              </div>
              {index < 3 && <div className="w-6 h-[2px] bg-gray-400"></div>}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div>
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold">Select Vehicle</h3>
              <p className="text-gray-400">{vehicleInfo}</p>
              <button
                className="mt-4 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                onClick={handleNextStep}
              >
                Confirm Vehicle
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold">Select Location</h3>

              {/* Tabs for Location */}
              <div className="flex items-center space-x-4 mb-4">
                {["current", "retail", "other"].map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      locationTab === tab ? "bg-gray-700" : "text-gray-400"
                    } px-4 py-2 rounded-md hover:bg-gray-700`}
                    onClick={() => setLocationTab(tab)}
                  >
                    {tab === "current"
                      ? "Current Location"
                      : tab === "retail"
                      ? "Retail Store"
                      : "Other"}
                  </button>
                ))}
              </div>

              {/* Location Content */}
              {locationTab === "current" && (
                <div className="bg-gray-700 rounded-md p-4 space-y-4">
                  <p className="text-gray-400">
                    📍 Goldenfinger, E 2nd Street, Long Beach, CA
                  </p>
                  <Map onSelectLocation={setSelectedAddress} />
                  {selectedAddress && (
                    <p className="text-green-400">
                      Selected: {selectedAddress}
                    </p>
                  )}
                </div>
              )}
              {locationTab === "retail" && (
                <div className="bg-gray-700 rounded-md p-4">
                  <p>Select a nearby retail store:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-400">Store 1 - 123 Main St.</li>
                    <li className="text-gray-400">Store 2 - 456 Oak Ave.</li>
                  </ul>
                </div>
              )}
              {locationTab === "other" && (
                <div className="bg-gray-700 rounded-md p-4">
                  <p>Enter a custom address:</p>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="w-full p-2 mt-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
              )}

              <button
                className="mt-4 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                onClick={handleNextStep}
              >
                Confirm Location
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <>
              {/* Step schedule Content */}
              <div>
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Schedule Pickup
                    </h3>

                    {/* Tabs for Schedule */}
                    <div className="flex items-center space-x-4 mb-4">
                      {["morning", "afternoon", "evening"].map((tab) => (
                        <button
                          key={tab}
                          className={`${
                            scheduleTab === tab
                              ? "bg-gray-700"
                              : "text-gray-400"
                          } px-4 py-2 rounded-md hover:bg-gray-700`}
                          onClick={() => setScheduleTab(tab)}
                        >
                          {tab === "morning"
                            ? "Morning"
                            : tab === "afternoon"
                            ? "Afternoon"
                            : "Evening"}
                        </button>
                      ))}
                    </div>

                    {/* Schedule Content */}
                    <div className="bg-gray-700 rounded-md p-4">
                      {scheduleTab === "morning" && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Morning Slots
                          </h4>
                          <div className="flex gap-4">
                            {["8:00 AM", "9:00 AM", "10:00 AM"].map((slot) => (
                              <button
                                key={slot}
                                className={`px-4 py-2 rounded-md ${
                                  selectedSlot === slot
                                    ? "bg-primary text-gray-900"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-600"
                                }`}
                                onClick={() => setSelectedSlot(slot)}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      {scheduleTab === "afternoon" && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Afternoon Slots
                          </h4>
                          <div className="flex gap-4">
                            {["12:00 PM", "1:00 PM", "2:00 PM"].map((slot) => (
                              <button
                                key={slot}
                                className={`px-4 py-2 rounded-md ${
                                  selectedSlot === slot
                                    ? "bg-primary text-gray-900"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-600"
                                }`}
                                onClick={() => setSelectedSlot(slot)}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      {scheduleTab === "evening" && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Evening Slots
                          </h4>
                          <div className="flex gap-4">
                            {["4:00 PM", "5:00 PM", "6:00 PM"].map((slot) => (
                              <button
                                key={slot}
                                className={`px-4 py-2 rounded-md ${
                                  selectedSlot === slot
                                    ? "bg-primary text-gray-900"
                                    : "bg-gray-800 text-gray-400 hover:bg-gray-600"
                                }`}
                                onClick={() => setSelectedSlot(slot)}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {selectedSlot && (
                      <p className="text-green-400 mt-4">
                        Selected Slot: {selectedSlot}
                      </p>
                    )}

                    <button
                      className="mt-4 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                      onClick={handleNextStep}
                    >
                      Confirm Schedule
                    </button>
                  </div>
                )}

                {/* Other Steps */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold">Select Vehicle</h3>
                    <button
                      className="mt-4 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                      onClick={handleNextStep}
                    >
                      Confirm Vehicle
                    </button>
                  </div>
                )}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold">Select Location</h3>
                    <button
                      className="mt-4 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                      onClick={handleNextStep}
                    >
                      Confirm Location
                    </button>
                  </div>
                )}
                {currentStep === 4 && (
                  <div>
                    <h3 className="text-lg font-semibold">Payment</h3>
                    <button
                      className="mt-4 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                      onClick={() => alert("Payment Complete!")}
                    >
                      Confirm Payment
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Choose Payment Method
              </h3>

              {/* Payment Methods */}
              <div className="flex flex-col space-y-4">
                {paymentMethods.map((method, index) => (
                  <label
                    key={index}
                    className={`flex items-center space-x-4 p-3 rounded-md ${
                      selectedPayment === method
                        ? "bg-primary text-gray-900"
                        : "bg-gray-700 hover:bg-gray-600"
                    } cursor-pointer`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={selectedPayment === method}
                      onChange={() => setSelectedPayment(method)}
                      className="hidden"
                    />
                    <div
                      className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                        selectedPayment === method
                          ? "border-gray-900 bg-white"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedPayment === method && (
                        <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <span>{method}</span>
                  </label>
                ))}
              </div>

              {/* Display Selected Payment */}
              {selectedPayment && (
                <p className="text-green-400 mt-4">
                  Selected Payment Method: {selectedPayment}
                </p>
              )}

              {/* Cost Summary */}
              <div className="mt-8 bg-gray-700 p-6 rounded-md space-y-4">
                <h4 className="text-lg font-semibold">Order Summary</h4>
                <div className="flex justify-between">
                  <span>Base Cost:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Handling Cost:</span>
                  <span>${(totalPrice * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-600 my-4"></div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Cost:</span>
                  <span>
                    $
                    {(
                      totalPrice +
                      totalPrice * 0.05 +
                      totalPrice * 0.08
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Confirm Payment */}
              <button
                className="mt-4 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                onClick={() => handlePlaceOrder()}
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
