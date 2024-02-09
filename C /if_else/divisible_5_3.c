#include<stdio.h>
int main(){
    int n;
    printf("Enter a Number: ");
    scanf("%d",&n);
    if (n%5==0 || n%3==0)
    {
        printf("This is Divisible by 5 and 3: ");
    }
    else{
        printf("This is Not Divisible by 5 and 3: ");
    }
    
    return 0;
}