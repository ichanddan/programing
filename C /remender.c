#include<stdio.h>
int main(){
    int a,b;
    printf("Enter dividend: ");
    scanf("%d", &a);
    printf("Enter Diviser: ");
    scanf("%d",&b);
    int q=a/b;
    int r=a-b*q;
    printf("The remender Wen %d is deviend by %d is : %d",a,b,r);
    return 0;
}