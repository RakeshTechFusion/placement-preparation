#include <iostream>

using namespace std;
typedef long long ll;
bool solve(ll N, ll curr) {
  if (curr == N) return true;
  if (curr > N) return false;

  return solve(N, curr * 10) || solve(N, curr * 20);
}
int main() {
  ll t;
  cin >> t;
  while (t--) {
    ll n;
    cin >> n;
    if (n == 1) {
      cout << "Yes" << endl;
    } else {
      if (solve(n, 1))
        cout << "Yes" << endl;
      else
        cout << "No" << endl;
    }
  }
  return 0;
}