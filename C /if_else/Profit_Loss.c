#include<stdio.h>
int main(){
    int cast,sell;
    printf("Enter Cast Price:");
    scanf("%d",&cast);
    printf("Enter Sell Price:");
    scanf("%d",&sell);
    if (sell>cast){
        printf("You are in Profit: ");
    }
    if (sell<cast){
        printf("You are Loss: ");
    }
    if (cast==sell) {
        printf("You are not Profit Not loss");
    }
    return 0;
}