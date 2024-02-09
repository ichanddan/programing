#include<stdio.h>
int main(){
    int n;
    printf("Enter a Number: ");
    scanf("%d",&n);
    if (n>99 && n<1000)
    {
        printf("This is Thiere Digit Number ");
    }
    else{
        printf("This is Not thre Digit Number");
    }
    
    return 0;
}