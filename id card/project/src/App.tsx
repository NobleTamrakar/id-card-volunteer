import React from 'react';
import { Download, HeaterIcon as Helicopter, BadgeCheck } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

function App() {
  const volunteerData = {
    name: "Sarah Johnson",
    id: "VOL-2024-0127",
    role: "Senior Medical Volunteer",
    joinDate: "January 2024",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    qrData: "https://verify.helicooperator.org/vol/VOL-2024-0127"
  };

  const handleDownload = () => {
    // In a real application, this would generate and download the ID card
    alert('ID card download functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-[#000F0B] flex flex-col items-center justify-center p-4">
      {/* ID Card Container */}
      <div className="w-full max-w-md bg-[#112221] rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#054938] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Helicopter className="w-8 h-8 text-[#00E8CF]" />
            <h1 className="text-[#00E8CF] text-xl font-bold">HeliCooperator</h1>
          </div>
          <BadgeCheck className="w-6 h-6 text-[#22C55E]" />
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Profile Section */}
          <div className="flex items-center gap-6">
            <img
              src={volunteerData.profileImage}
              alt={volunteerData.name}
              className="w-24 h-24 rounded-full border-4 border-[#094534] object-cover"
            />
            <div>
              <h2 className="text-[#F0F2F0] text-2xl font-bold">{volunteerData.name}</h2>
              <p className="text-[#3FEBD0] font-medium">{volunteerData.role}</p>
              <p className="text-[#F0F2F0] text-sm mt-1">ID: {volunteerData.id}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#094534] my-6"></div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-[#3FEBD0] text-sm">Join Date</p>
              <p className="text-[#F0F2F0]">{volunteerData.joinDate}</p>
            </div>
            <div>
              <p className="text-[#3FEBD0] text-sm">Status</p>
              <p className="text-[#22C55E] font-medium">Active</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex justify-center bg-white p-4 rounded-lg">
            <QRCodeSVG
              value={volunteerData.qrData}
              size={128}
              level="H"
              includeMargin={true}
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="p-4 bg-[#054938] mt-4">
          <button
            onClick={handleDownload}
            className="w-full bg-[#22C55E] hover:bg-[#00BC4C] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
          >
            <Download className="w-5 h-5" />
            Download ID Card
          </button>
        </div>
      </div>

      <p className="text-[#3FEBD0] mt-6 text-center max-w-md text-sm">
        This ID card is property of HeliCooperator. If found, please return to the nearest HeliCooperator facility.
      </p>
    </div>
  );
}

export default App;