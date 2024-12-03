#include <iostream>

void recursivePrint(int count) {
    if (count <= 0) return;
    std::cout << "Hello, World!" << std::endl;
    recursivePrint(count - 1);
}

int main() {
    recursivePrint(1);
    return 0;
}
