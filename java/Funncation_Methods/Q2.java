package Funncation_Methods;

import java.util.Scanner;

import java.util.*;
public class Q2 {
    public static void myFuncation(int n){
        if(n<0){
            System.out.println("O p");
            return;
        }
        int factorial=1;
        for(int i=n; i>=1; i--){
            factorial=factorial*i;
        }
        System.out.println(factorial);
        return;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n =sc.nextInt();
        myFuncation(n);
    }
}
