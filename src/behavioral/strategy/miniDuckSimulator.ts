import { FlyRocketPowered } from "./FlyRocketPowered";
import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";

export const miniDuckSimulator = () => {
    const mallard = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    const model = new ModelDuck();
    model.performFly();
    
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
};

miniDuckSimulator();