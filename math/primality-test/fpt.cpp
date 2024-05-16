#include <iostream>
#include <cmath>
#include <list>

using namespace std;

list < int > CARMICHAEL_NUMBERS = {
  561,
  1105,
  1729,
  2465,
  2821,
  6601,
  8911,
  10585,
  15841,
  29341,
  41041,
  46657,
  52633,
  62745,
  63973
};


/**
* Calculating residual with modular exponentiation.
*
* x ^ p % n = 1
*
* x: uniform random number 2 : n - 1
* p: n - 1
* n: number to be checked for primality
*/
int calcResidual(long x, long p, long n) {
  int res = 1;
  //cout << "x, p, res" << endl;

  while (p > 0) {
    //cout << x << ", " << p << ", " << res << endl;

    if (p % 2 == 0) {
      x = (x * x) % n;
      p = p / 2;

    } else {
      res = (res * x) % n;
      p--;
    }
  }

  return res;
}

bool isPrime(long n, long k) {
  if (n <= 3) return true;

  if (n % 2 == 0) return false;

  while (k-- > 0) {
    // 2 : n - 1
    long a = random() % (n - 3) + 2;

    if (calcResidual(a, n - 1, n) != 1) return false;
  }

  return true;
}


void run(long n);

int main() {
  for (int cn: CARMICHAEL_NUMBERS) run(cn);

  while (true) {
    long n;
    cout << "> ";
    cin >> n;

    if (n == 0) break;

    run(n);
  }
}

void run(long n) {
  long k = rand() % (n / 2) - 1 + n / 2;
  cout << (isPrime(n, k) ? "Prime": "Composite") << endl;
}