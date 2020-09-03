Program Structure
=================

The user shall enter a credit card number. If text is entered instead of a number, this will be gracefully rejected and they'll be asked again to enter a number.

A function called check_number will be called on the number.
This will subsequently call other functions:
  - get_length to get the length of the number
  - value_in_array to check if the length is present in an allowedLengths array
If the number passes both of those checks, it will then be subjected to Luhn's algorithim to check the validity of the card number.