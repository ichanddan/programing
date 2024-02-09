// #include<stdio.h>
// int main(){
//     int a,b,c;
//     printf("Enter 1st number: ");
//     scanf("%d",&a);
//     printf("Enter 2nd number: ");
//     scanf("%d",&b);
//     printf("Enter 3rd number: ");
//     scanf("%d",&c);
//     if (a>b && a>c){
//         printf("%d is gretest", a);
//     }
//     if (b>a && b>c){
//         printf("%d is gretest", b);
//     }
//     if (c>a && c>b){
//         printf("%d is gretest", c);
//     }
    
//     return 0;
// }
#include<stdio.h>
int main(){
    int a,b,c,d;
    printf("Enter 1st number: ");
    scanf("%d",&a);
    printf("Enter 2nd number: ");
    scanf("%d",&b);
    printf("Enter 3rd number: ");
    scanf("%d",&c);
    printf("Enter 4th number: ");
    scanf("%d",&d);
    if (a>b && a>c && a>d){
        printf("%d is gretest", a);
    }
    if (b>a && b>c && b>d){
        printf("%d is gretest", b);
    }
    if (c>a && c>b && c>d){
        printf("%d is gretest", c);
    }
    if (d>a && d>b && d>c){
        printf("%d is gretest", d);
    }
    
    return 0;
}