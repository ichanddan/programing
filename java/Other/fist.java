import java.util.Scanner;
public class fist{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
            System.out.print("Enter Fist Number: ");
            int a= sc.nextInt();
            System.out.print("Enter Secund Number: ");
            int b= sc.nextInt();
            System.out.println("This is Your total: "+a*b);
            if (a==b) {
                System.out.println("1st and 2nd valu is equal: "+a);
                
            } else {
                System.out.println(" 1st and 2nd valu is not equal");
                
            }
    }
}