package Other;
import java.util.Scanner;
public class calculator {
    /**
     * @param args
     */
    public static void main(String[] args) {
        Scanner main= new Scanner(System.in);
        int plan , news,total;
        System.out.print("Enter Buy Price: ");
        plan=main.nextInt();
        System.out.print("Enter Sell Price: ");
        news=main.nextInt();
        total=plan-news;
        if (plan<news) {
            System.out.println("You are Profit: "+total);
            
        }
        if (plan==news) {
            System.out.println("You are No profit No Loss");
            
        }
        if (plan>news) {
            System.out.println("You are Loss: "+total);
  
        }
        }

    }
    
