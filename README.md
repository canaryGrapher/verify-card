# Verify-card
This application has been made using ReactJS, and it has a straightforward use, to check if the credit/debit card number is valid, or not, using Luhn Algorithms. It also has an additional feature to check the issuing agency of the card using the predefined IIN numbers.

## Luhn Algorithm
The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, named after its creator, IBM scientist Hans Peter Luhn, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, etc.
The algorithm is in the public domain and is in wide use today.It is not intended to be a cryptographically secure hash function; it was designed to protect against accidental errors, not malicious attacks. People use the algorithm as a simple method of distinguishing valid numbers from mistyped or otherwise incorrect numbers. [Source](https://en.wikipedia.org/wiki/Luhn_algorithm)
### Method
The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This number must pass the following test:
* From the rightmost digit (excluding the check digit) and moving left, double the value of every second digit. The check digit is neither doubled nor included in this calculation; the first digit doubled is the digit located immediately left of the check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the result (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same final result can be found by subtracting 9 from that result (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
* Take the sum of all the digits.
* If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; otherwise it is not valid.

You can find a good explanation of the algorithm on [GeeksforGeeks](https://www.geeksforgeeks.org/luhn-algorithm/)


## IIN Numbers
The issuer identification number (IIN) refers to the first few digits of a payment card number issued by a financial institution. They are typically the first eight digits found on a credit, debit, or another type of payment card.
These the IIN numbers I used for the project. [Source](https://baymard.com/checkout-usability/credit-card-patterns)

Card Type <br /> *The issuing network*  | Length <br /> *Number of allowable digits* | IIN Ranges <br /> *The card number will always begin with these*
:---: | :---: | :---:
Visa (incl. VPay) | 13-19 | 4  
Visa Electron	| 16 |	4026, 417500, 4405, 4508, 4844, 4913, 491
American Express | 15	| 34, 37	
China UnionPay | 16-19 | 62	
MasterCard	| 16 |	51‑55, 222100‑272099	
Maestro	| 12-19	| 500000‑509999, 560000‑589999, 600000‑699999	
Diners Club Carte Blanche	| 14	| 300‑305	
Diners Club International	| 14	| 300‑305, 309, 36, 38‑39	
Diners Club United States & Canada	| 16 |	54, 55	
Discover	| 16 |	6011, 622126‑622925, 644‑649, 65	
JCB |	16 |	3528‑3589	
UATP	| 15 |	1	
Dankort	| 16 |	5019	
InterPayment	| 16-19	| 636

# Website
This repo is hosted on https://canarygrapher.github.io/pokedex
![Image of the website](https://github.com/canaryGrapher/verify-card/blob/master/public/socialImage.png?raw=true)

# License
Copyright 2020 [@canaryGrapher](https://github.com/canaryGrapher)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Disclaimer
All the images used on the website **do not** belong to me. All logos are properties of the respective companies that own them. 
