import AskQuestion from "../page/askQuestion";
import DetailQuestion from "../page/detailQuestion";
import Home from "../page/home";
import Profile from "../page/profile";

export const PATH = [
   {
      id: 'home',
      path: '/',
      element: <Home />,
      exact: true
   },
   {
      id: 'profile',
      path: '/profile/:user_id',
      element: <Profile />,
      exact: false
   },
   {
      id: 'question-detail',
      path: '/questions/:slug',
      element: <DetailQuestion />,
      exact: false
   },
   {
      id: 'question-form',
      path: '/questions/create',
      element: <AskQuestion />,
      exact: false
   },
]