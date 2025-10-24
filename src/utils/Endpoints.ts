export const BASE_URL =
  "https://etcha.us/api/";

export const endpoints = {
  Login: "user/login",
  Register: "user/register",
  Logout: "user/logout",
  SocialLogin: "social-login",
  ResetPassword: "user/resetpassword",
  ForgotPassword: "user/forgotpassword",
  VerifyCode: "verify-code",
  Category: (id: string) => "category/list?parent_id=" + id,
  FilterCategoryByTitle: (title: string) =>
    "category/list?filter_by_title=" + title,
  AllCategory:
    "user/event/list",
  Bookings: (date) => "event/list?filter_by_date=" + date,
  BookSlot: "booking/user/add",
  DietAdd: "food/user/add",
  GetDiet: "food/list",
  MoodAdd: "mood/user/add",
  GetMood: "mood/list",
  RegisterEvent: "event/user/register",
  UpdateProfile: "user/profile/update",
  NotificationList: "activity/list"
};
