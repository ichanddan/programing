#include<stdio.h>
int main (){
    int n;
    printf("Enter a number: ");
    scanf("%d",&n);
    if (n%2==0){
        printf("Even Number");
    }
    // if (n%2!=0){
    //     printf("Odd Number"); use two deffrent type of if else 
    // }
    else{
        printf("Odd Number");
    }
    
    return 0;
}