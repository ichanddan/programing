import java.util.*;
public class Radius {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double area , pi , radius;
        System.out.print("Enter Radius: ");
        radius=sc.nextDouble();
        pi=3.1415;
        area= pi*radius*radius;
        System.out.println("Your Area Circle: "+area);
    }
    
}