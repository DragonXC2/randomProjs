/*
  This program is a simple one, only asking for an input and returning the factorial
  of given number, written in Java

  Written by Addison Chen
*/

import java.util.Scanner;

class Main{
  public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter a number: ");
    int num = scanner.nextInt();
    System.out.println(factorial(num));
  }
  //Calculating factorial
  public static int factorial(int num){
    int sum = 1;
    for(int i = 1;i<num+1;i++){
      sum = sum * i;
    }
    return sum;
  }
}
