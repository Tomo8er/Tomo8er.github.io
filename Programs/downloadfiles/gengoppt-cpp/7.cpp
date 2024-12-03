#include <iostream>

int main() {
    auto hello = []() { std::cout << "Hello, World!" << std::endl; };
    hello();
    return 0;
}
