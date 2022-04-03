using FinComm.Model;

namespace FinComm.Data
{
    public class DbInitializer
    {
        public static void Initialize(CommunityContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (!context.Community.Any())
            {
                var community = new Community[]
                {
                new Community{name ="test", status=1, avatar="test image", loan=100, savings= 200, loanrequests=3, membercount=2, startdate="01/02/2022"},
                new Community{name ="test1", status=1, avatar="test image", loan=100, savings= 200, loanrequests=3, membercount=2, startdate="01/02/2022"},
                new Community{name ="test2", status=1, avatar="test image", loan=100, savings= 200, loanrequests=3, membercount=2, startdate="01/02/2022"},
                new Community{name ="test3", status=1, avatar="test image", loan=100, savings= 200, loanrequests=3, membercount=2, startdate="01/02/2022"},
                new Community{name ="test4", status=1, avatar="test image", loan=100, savings= 200, loanrequests=3, membercount=2, startdate="01/02/2022"},
                };
                foreach (Community s in community)
                {
                    context.Community.Add(s);
                }
                context.SaveChanges();
            }
            /******************************************************/
            if (context.ActivityData.Any())
            {
                return;   // DB has been seeded
            }

            var activities = new ActivityData[]
            {
                new ActivityData{name ="Kristin Watson", avatar="assets/user1.png", activityDesc="Won lot on 10/01/2022"},
                new ActivityData{name ="Jenny Wilson", avatar="assets/user5.png", activityDesc="Loan approved for $1200 on 10/01/2022"},
                 new ActivityData{name ="Esther Howard", avatar="assets/user6.png", activityDesc="Paid $200 on 10/01/2022"}
            };
            foreach (ActivityData s in activities)
            {
                context.ActivityData.Add(s);
            }
            context.SaveChanges();
        }
    }
}
