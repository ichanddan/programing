#include<stdio.h>
int main(){
    float pricipal,rate,time,si;
    printf("Enter Your Principal Amount: ");
    scanf("%f" ,&pricipal);
    printf("Enter Your Rate Amount: ");
    scanf("%f",&rate);
    printf("Enter Time Amount: ");
    scanf("%f",&time);
    si=(pricipal*rate*time)/100;
    printf("Your Total Intrest: %f",si);
    return 0;
}