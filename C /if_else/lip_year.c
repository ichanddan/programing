// HW: Any year is input through the keyboard. Write a program to determine whether the year is a liap year or not.(Considering leap year occurs after every 4 years)
#include<stdio.h>
int main (){
    int n;
    printf("Enter a Year: ");
    scanf("%d",&n);
    if (n%4==0)
    {
        if (n%100==0)
        {
            if (n%400==0)
            printf(" %d Is Lip Year",n);
            else
            printf(" %d Is Not Lip Year.",n);
        } else
             printf(" %d isLip Year",n);
    }
    else{
        printf("%d Is Not Lip Year",n);
    }
    return 0;
}