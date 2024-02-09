import java.util.Scanner;
public class profitloss {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double buy,sell,total,lot;
        System.out.print("Enter Buy Price: ");
        buy=sc.nextDouble();
        System.out.print("Enter Sell Price: ");
        sell=sc.nextDouble();
        System.out.print("Enter Your lot size: ");
        lot=sc.nextDouble();
        lot=lot*50;
        total=lot*buy;
        sell=sell-buy;
        sell=sell*lot;
        System.out.println("Your Total Fund Used : " +total);
        if (buy<sell) {
            System.out.println("You are Profit: "+sell);
        }
        if(buy==sell){
            System.out.println("You are not Profit not loss");
        }
        else {
            System.out.println("You are loss: "+sell);

        }
        sell=sell/total;
        System.out.println("Total Profit Loss your Capital in Persantages"+sell);

    }
}
