// Print The Pattern Flod's Triangle 
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
package Pattern;
import java.util.*;
public class Q8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a =5, n=1;
        for(int i=1; i<=a; i++){
            for(int j=1; j<=i; j++){
                System.out.print(n+" ");
                n++;
            }
            System.out.println();
        }

    }
}
