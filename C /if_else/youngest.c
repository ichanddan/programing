#include<stdio.h>
int main(){
    int a,b,c;
    printf("Enter 1st Name: ");
    scanf("%d",&a);
    printf("Enter 2nd Name: ");
    scanf("%d",&b);
    printf("Enter 3rd Name: ");
    scanf("%d",&c);
    if (a>b && a>c){
        printf("%d is Youngest", a);
    }
    if (b>a && b>c){
        printf("%d is Youngest", b);
    }
    if (c>a && c>b){
        printf("%d is Youngest", c);
    }
    
    return 0;
}