export const abi =  [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "ShippingRequestCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "street",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "city",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "state",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "zip",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "country",
            "type": "string"
          }
        ],
        "internalType": "struct ShippingRequestCreator.AddressDetails",
        "name": "pickupAddress",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "street",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "city",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "state",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "zip",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "country",
            "type": "string"
          }
        ],
        "internalType": "struct ShippingRequestCreator.AddressDetails",
        "name": "destinationAddress",
        "type": "tuple"
      }
    ],
    "name": "createShippingRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRequestsSender",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requestCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
export const contractAddress = "0x4698b8EF578aAa5b8E4C23F4C78611aC26c6cd1E"