import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

// Replace with your contract ABI
const CONTRACT_ABI = [[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "createProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "PropertyCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "PropertyTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "forSale",
				"type": "bool"
			}
		],
		"name": "PropertyUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_forSale",
				"type": "bool"
			}
		],
		"name": "updateProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getProperty",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "forSale",
						"type": "bool"
					}
				],
				"internalType": "struct RealEstate.Property",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ownedProperties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "properties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "forSale",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "propertyCount",
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
  // Include your ABI here
];

// Replace with your deployed contract address
const CONTRACT_ADDRESS = '0x5cbb31a034095B26373Fa9F94dBC3A4e29D464E5';

function App() {
  const [acc, setAcc] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (acc && web3) {
      const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      setContract(contractInstance);
    }
  }, [acc, web3]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAcc(accounts[0]);
      } catch (error) {
        console.error('Error connecting to wallet', error);
      }
    } else {
      console.log('MetaMask not detected');
    }
  };

  const createProperty = async (name, location, price) => {
    if (contract) {
      try {
        await contract.methods.createProperty(name, location, price).send({ from: acc });
      } catch (error) {
        console.error('Error creating property', error);
      }
    }
  };

  const getProperty = async (id) => {
    if (contract) {
      try {
        const property = await contract.methods.getProperty(id).call();
        console.log('Property details:', property);
      } catch (error) {
        console.error('Error fetching property', error);
      }
    }
  };

  const transferProperty = async (id, newOwner) => {
    if (contract) {
      try {
        await contract.methods.transferProperty(id, newOwner).send({ from: acc });
      } catch (error) {
        console.error('Error transferring property', error);
      }
    }
  };

  const updateProperty = async (id, name, price, forSale) => {
    if (contract) {
      try {
        await contract.methods.updateProperty(id, name, price, forSale).send({ from: acc });
      } catch (error) {
        console.error('Error updating property', error);
      }
    }
  };

  return (
    <div className="App">
      <ul className="nav">
        <li className="nav-item">
          {acc ? (
            <div className="nav-link mr-4" onClick={connectWallet}>
              {acc.slice(0, 6) + '...' + acc.slice(-4)}
            </div>
          ) : (
            <div className="nav-link mr-4" onClick={connectWallet}>
              Connect Wallet
            </div>
          )}
        </li>
      </ul>
      {/* Example buttons to call contract methods */}
      <button onClick={() => createProperty('House', 'New York', Web3.utils.toWei('1', 'ether'))}>
        Create Property
      </button>
      <button onClick={() => getProperty(1)}>Get Property</button>
      <button onClick={() => transferProperty(1, '0xNewOwnerAddressHere')}>Transfer Property</button>
      <button onClick={() => updateProperty(1, 'Updated House', Web3.utils.toWei('2', 'ether'), true)}>
        Update Property
      </button>
    </div>
  );
}

export default App;
