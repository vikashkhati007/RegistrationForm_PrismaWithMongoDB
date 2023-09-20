import { RegisterUser } from "@/helper/register";
export default function Page() {
  async function formHandler(formData: FormData) {
    "use server";
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    RegisterUser(data);
  }

  return (
    <div className="homecontainer w-full h-screen flex justify-center items-center">
      <div className="registerationformcontainer w-96 h-[70%]">
        <form action={formHandler} className="w-full h-full flex flex-col justify-center items-center space-y-7">
            <h1 className="animate-charcter font-semibold text-white text-3xl">Registration Form</h1>
            <div className="inputcontainer flex flex-col justify-center item-center space-y-2">
            <input
              autoFocus
              type="text"
              name="username"
              placeholder="Enter Your Username"
              className="p-2 rounded-md outline-none"
            />
            <input type="email" name="email" placeholder="Enter Your Email"
              className="p-2 rounded-md outline-none"
              />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="p-2 rounded-md outline-none"
            
            />
            </div>
            <button className="btn-grad px-5 py-2 font-bold border" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
