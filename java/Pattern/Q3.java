package Pattern;
// Print the Pattern Half Pyramid
public class Q3 {
    public static void main(String[] args) {
        int n=10;
        // Outer Loops 
        for(int i=1; i<=n;i++){
            // inner loops 
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
}
