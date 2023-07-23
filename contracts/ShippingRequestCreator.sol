// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ShippingRequestCreator {
    struct AddressDetails {
        string name;
        string street;
        string city;
        string state;
        string zip;
        string country;
    }

    struct ShippingRequest {
        address requester;
        AddressDetails pickupAddress;
        AddressDetails destinationAddress;
        bool shipped;
    }

    mapping(address => ShippingRequest[]) private shippingRequests;
    uint256 public requestCounter;

    event ShippingRequestCreated(uint256 requestId);

    function createShippingRequest(
        AddressDetails memory pickupAddress,
        AddressDetails memory destinationAddress
    ) external {
        shippingRequests[msg.sender].push(
            ShippingRequest(
                msg.sender,
                pickupAddress,
                destinationAddress,
                false
            )
        );

        emit ShippingRequestCreated(requestCounter);
    }

    function getRequestsSender() public view returns (string memory) {
        string memory text;
        string memory space = " ";

        ShippingRequest[] storage requests = shippingRequests[msg.sender];
        if (requests.length > 0) {
            text = string(
                abi.encodePacked(
                    requests[0].pickupAddress.name,
                    space,
                    requests[0].pickupAddress.street,
                    space,
                    requests[0].pickupAddress.city,
                    space,
                    requests[0].pickupAddress.state,
                    space,
                    requests[0].pickupAddress.zip,
                    space,
                    requests[0].pickupAddress.country
                )
            );
        }
        return text;
    }
  

}
