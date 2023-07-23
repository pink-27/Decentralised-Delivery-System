import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import { abi, contractAddress } from "../constants";
function DestinationAddressCard({ destinationAddress, handleDestinationAddressChange }) {

    
    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md p-8 mb-4">
      <h2 className="text-2xl font-semibold mb-4">Destination Address</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={destinationAddress.name}
          onChange={handleDestinationAddressChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Street:
        </label>
        <input
          type="text"
          name="street"
          value={destinationAddress.street}
          onChange={handleDestinationAddressChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            City:
          </label>
          <input
            type="text"
            name="city"
            value={destinationAddress.city}
            onChange={handleDestinationAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            State:
          </label>
          <input
            type="text"
            name="state"
            value={destinationAddress.state}
            onChange={handleDestinationAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ZIP Code:
          </label>
          <input
            type="text"
            name="zip"
            value={destinationAddress.zip}
            onChange={handleDestinationAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={destinationAddress.country}
            onChange={handleDestinationAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
        </div>
      </div>
    </div>
  );
}


function PickupAddressCard({ pickupAddress, handlePickupAddressChange }) {


  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md p-8 mb-4">
      <h2 className="text-2xl font-semibold mb-4">Pickup Address</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={pickupAddress.name}
          onChange={handlePickupAddressChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Street:
        </label>
        <input
          type="text"
          name="street"
          value={pickupAddress.street}
          onChange={handlePickupAddressChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            City:
          </label>
          <input
            type="text"
            name="city"
            value={pickupAddress.city}
            onChange={handlePickupAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            State:
          </label>
          <input
            type="text"
            name="state"
            value={pickupAddress.state}
            onChange={handlePickupAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            ZIP Code:
          </label>
          <input
            type="text"
            name="zip"
            value={pickupAddress.zip}
            onChange={handlePickupAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={pickupAddress.country}
            onChange={handlePickupAddressChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}

function ShippingPage() {
    const [destinationAddress, setDestinationAddress] = useState({
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      });

      const [pickupAddress, setPickupAddress] = useState({
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });

    const handlePickupAddressChange = (e) => {
        const { name, value } = e.target;
        setPickupAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleDestinationAddressChange = (e) => {
        const { name, value } = e.target;
        setDestinationAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    async function addTochain() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Adding data to chain...");

        try {
            console.log("Adding data to chain2...");
      const transactionResponse = await contract.createShippingRequest(
        [
          pickupAddress.name,
          pickupAddress.street,
          pickupAddress.city,
          pickupAddress.state,
          pickupAddress.zip,
          pickupAddress.country,
        ],
        [
          destinationAddress.name,
          destinationAddress.street,
          destinationAddress.city,
          destinationAddress.state,
          destinationAddress.zip,
          destinationAddress.country,
        ]
      );
      console.log("Adding data to chain3...");
      await listenForTransactionMine(transactionResponse, provider);
      console.log("Adding data to chain4...");
      console.log("done");
      
    } catch (error) {
      console.log(error);
    }
  }

  async function see() {
    console.log("See function called");
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    console.log(await provider.getCode(contractAddress))
    const contract = new ethers.Contract(contractAddress, abi, provider);
  
    try {
      const result = await contract.getRequestsSender()
      console.log("Data received:", result);
    } catch (error) {
      console.log("Error while fetching data:", error);
    }
  }

  function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}....`);

    return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, (tranctionRecipt) => {
        console.log(`confirmation-${tranctionRecipt.confirmations}...`);
        resolve();
      });
    });
  }
    
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-8">
        <div>
        <PickupAddressCard
            pickupAddress={pickupAddress}
            handlePickupAddressChange={handlePickupAddressChange}
          />
        </div>
        <div>
        <DestinationAddressCard
            destinationAddress={destinationAddress}
            handleDestinationAddressChange={handleDestinationAddressChange}
          />
        </div>
      </div>
      <div className="flex mt-4">
        <button
          onClick={() => addTochain()}
          className="px-7 ml-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 absolute bottom-12 mb-9"
        >
          Ship Now
        </button>
        <button
          onClick={() => see()}
          className="px-7 ml-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 absolute left-12 bottom-12 mb-9"
        >
          retrive
        </button>
      </div>
    </div>
  );
}

export default ShippingPage;
