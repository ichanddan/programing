// Quation 1: Print the sum of first n Natural Number.
package loops;
import java.util.*;
public class loopsq1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n =sc.nextInt();
        int sum=0;
        for(int i=1; i<=10;i++){
            sum=sum+i;
        }
        System.out.println(sum);
    }
    
}
