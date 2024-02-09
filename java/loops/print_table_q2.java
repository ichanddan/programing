package loops;
import java.util.*;
public class print_table_q2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Yor Number: ");
        int k = sc.nextInt();
        for(int i=1; i<=10; i++){
            System.out.print(" "+k*i);
        }
    }
}
