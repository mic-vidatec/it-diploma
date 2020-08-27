#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int value_in_array(int value, const int a[], int n) {
    int i = 0;

    while (i < n && a[i] != value) {
        i++;
    }

    return i == n ? 0 : 1;
}

int get_length(long cardNumber) {
    int count = 0;

    while (cardNumber != 0) {
        cardNumber /= 10;     // n = n/10
        ++count;
    }

    return count;
}

string check_number(long cardNumber) {
    int allowedLengths[3] = {13, 15, 16};
    int cardNumberLength = get_length(cardNumber);

    const int N = sizeof( allowedLengths ) / sizeof( *allowedLengths );
    if (!value_in_array(cardNumberLength, allowedLengths, N)) {
        return "INVALID\n";
    }

    int number[cardNumberLength];
    for (int i = (cardNumberLength - 1); i >= 0; i--){
        number[i] = cardNumber % 10;
        cardNumber = floor(cardNumber / 10);
    }

    int stepOne = 0;
    for (int j = (cardNumberLength - 2); j >= 0; j -= 2) {
        int current = 0;
        current = (number[j] * 2);
        if (current >= 10) {
            int mod = current % 10;
            stepOne += 1;
            stepOne += mod;
        } else {
            stepOne += current;
        }
    }

    int stepTwo = 0;
    for (int k = (cardNumberLength - 1); k >= 0; k -= 2) {
        int current = number[k];
        stepTwo += current;
    }

    int total = stepOne + stepTwo;

    if (total % 10 == 0) {
        if (number[0] == 3) {
            if (number[1] == 4 || number[1] == 7) {
                return "AMEX\n";
            }
        } else if (number[0] == 4) {
            return "VISA\n";
        } else if (number[0] == 5) {
            if (number[1] == 1 || number[1] == 2 || number[1] == 3 || number[1] == 4 || number[1] == 5) {
                return "MASTERCARD\n";
            }
        }
    }

    return "INVALID\n";
}

int main(void) {
    long creditCardNumber = get_long("What is the number? ");
    string result = check_number(creditCardNumber);
    printf("%s", result);
}