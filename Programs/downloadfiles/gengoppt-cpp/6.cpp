#include <iostream>

class HelloWorld {
public:
    void print() {
        std::cout << "Hello, World!" << std::endl;
    }
};

int main() {
    HelloWorld hw;
    hw.print();
    return 0;
}
