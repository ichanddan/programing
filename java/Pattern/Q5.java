package Pattern;
// Print the Pattern inverted Half Piramid(Rotaed by 180 deg)
public class Q5 {
    public static void main(String[] args) {
        int n=4;
        // Outer Loops
        for(int i=1; i<=n; i++){
            // inner loop -> Print Space
            for(int k=1;k<=n-i; k++){
                System.out.print(" ");
            }
            // inner Loops -> Star print
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();

        }
    }
    
}
