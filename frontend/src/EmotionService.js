
import { observable, action } from "mobx";
@observable
class EmotionService {
    @observable petEmotion = 0;

    constructor(){
        this.petEmotion = 0;
    }

    @action
    addEmotion(){
        this.petEmotion++;
    }

    @action
    setEmotion(i){
        this.petEmotion = i;
    }

    @action
    minusEmotion(){
        this.petEmotion--;
    }

    @action
    getEmotion(){
        return this.petEmotion;
    }


}

export default EmotionService;