import { useBooking } from "../context/useBooking";
import { Calendar } from "react-calendar";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DatePicker() {
  const { date, setDate, time: selectedTime, setTime } = useBooking();
  const navigate = useNavigate();

  // Generate time slots (e.g., 9:00 AM to 5:00 PM)
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ];

  const handleTimeSelect = (time) => {
    setTime(time);
    // You might want to scroll to next section or show confirmation here
    console.log(`Selected time: ${time} on ${format(date, "MMMM do, yyyy")}`);
  };

  const handleUserInfo = () => {
    navigate("/user-info");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] py-12 px-4 sm:px-6 lg:px-8 bg-pink-50/30">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Calendar Section */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Select Date</h2>
              <span className="text-sm font-medium text-pink-500 bg-pink-50 px-3 py-1 rounded-full">
                {date ? format(date, "MMMM yyyy") : "Choose a date"}
              </span>
            </div>
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full border-none"
              tileClassName={({ date: d, view }) => {
                // Add custom logic if needed, e.g., disable past dates
                if (view === "month") {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  if (d < today) return "opacity-30 cursor-not-allowed";
                }
              }}
              prevLabel={<ChevronLeft className="w-5 h-5 text-gray-500" />}
              nextLabel={<ChevronRight className="w-5 h-5 text-gray-500" />}
              minDate={new Date()}
            />
          </div>

          {/* Time Slot Section */}
          <div className="p-8 bg-gray-50/50">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-pink-500" />
              <h2 className="text-2xl font-bold text-gray-800">Select Time</h2>
            </div>

            <div className="mb-6">
              <p className="text-gray-500 text-sm">
                Available slots for{" "}
                <span className="font-semibold text-gray-800">
                  {date ? format(date, "EEEE, MMMM do") : "selected date"}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`
                                        py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 border
                                        ${
                                          selectedTime === time
                                            ? "bg-pink-500 text-white border-pink-500 shadow-lg shadow-pink-200 transform scale-105"
                                            : "bg-white text-gray-700 border-transparent hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 shadow-sm"
                                        }
                                    `}
                >
                  {time}
                </button>
              ))}
            </div>

            {selectedTime && (
              <div className="mt-8 pt-6 border-t border-gray-200 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Selected
                    </span>
                    <span className="text-gray-800 font-bold">
                      {format(date, "MMM do")} at {selectedTime}
                    </span>
                  </div>
                  <button
                    className="bg-gray-900 text-white px-6 py-2 rounded-xl font-medium hover:bg-black transition-colors shadow-lg shadow-gray-200"
                    onClick={handleUserInfo}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
