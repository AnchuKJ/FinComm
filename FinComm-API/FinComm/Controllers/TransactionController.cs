using Microsoft.AspNetCore.Mvc;
using Nethereum.Hex.HexTypes;
using Nethereum.Web3;

namespace FinComm.Controllers
{
    public class TransactionController : Controller
    {
        [HttpPost("posttransaction")]
        public async Task<IActionResult> PostTransaction([FromBody] double amount)
        {
            try
            {
                var web3 = new Web3("HTTP://127.0.0.1:7545");

                var senderAddress = "0x7E1df0a2BdC72d307b6468451C8A8d887bdDAbC9"; // put actual sender address

                var receiveAddress = "0xd5617A702B5e287487256F1d13bf833f68eB68e4"; //put actual receiver address

                var txCount = await web3.Eth.Transactions.GetTransactionCount.SendRequestAsync(senderAddress);

                //  double sendAmount = amount; //this is ETH
                var amountInWei = Web3.Convert.ToWei(amount);
                var balance = await web3.Eth.GetBalance.SendRequestAsync(senderAddress);
                Console.WriteLine(balance.Value);

                //600 GWEI = 0.000000600
                //60 GWEI = 0.000000060
                var sendAmount = new HexBigInteger(amountInWei);
                await web3.Eth.TransactionManager.SendTransactionAsync(senderAddress, receiveAddress, sendAmount);
            }
            catch (Exception ex)
            {

            }
            return new OkObjectResult(amount);
        }
    }
}
