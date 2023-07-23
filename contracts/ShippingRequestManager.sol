// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./ShippingRequestCreator.sol"; // Import the ShippingRequestCreator contract


contract ShippingRequestManager {
    ShippingRequestCreator private creator;

    constructor(address creatorAddress) {
        creator = ShippingRequestCreator(creatorAddress);
    }

    function createShippingRequest(
        string memory pickupName,
        string memory pickupStreet,
        string memory pickupCity,
        string memory pickupState,
        string memory pickupZip,
        string memory pickupCountry,
        string memory destinationName,
        string memory destinationStreet,
        string memory destinationCity,
        string memory destinationState,
        string memory destinationZip,
        string memory destinationCountry
    ) external {
        ShippingRequestCreator.AddressDetails memory pickupAddress =
            ShippingRequestCreator.AddressDetails(
                pickupName,
                pickupStreet,
                pickupCity,
                pickupState,
                pickupZip,
                pickupCountry
            );

        ShippingRequestCreator.AddressDetails memory destinationAddress =
            ShippingRequestCreator.AddressDetails(
                destinationName,
                destinationStreet,
                destinationCity,
                destinationState,
                destinationZip,
                destinationCountry
            );

        creator.createShippingRequest(pickupAddress, destinationAddress);
    }
}
