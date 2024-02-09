package Pattern;
// Prinnt the Pattern Inverted Pyramid
public class Q4 {
        public static void main(String[] args) {
        int n=100;
        // Outer Loops 
        for(int i=n; i>=1;i--){
            // inner loops 
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
}


