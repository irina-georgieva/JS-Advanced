function construction (input){

    if(input.dizziness){
        input.levelOfHydrated += 0.1 * input.experience * input.weight;
        input.dizziness = false;
    }

    return input;
}