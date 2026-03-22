import { Card, CardContent } from "./shadcnui/card";
import { Separator } from "./shadcnui/separator";

const UserProfileCard = () => {
  return (
    <Card className="w-sm">
      <CardContent className="grid place-items-center gap-3">
        <div className="m-2 size-45 rounded-3xl border-2"></div>
        <Separator className="w-full" />
        <div className="grid gap-2">
          <p className="text-2xl font-semibold">Name : Dhruba Das</p>
          <p className="text-lg">Email : dhrubadas.dev@gmail.com</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
