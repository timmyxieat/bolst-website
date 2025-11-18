import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import { addToWaitlist } from '../lib/sendfox';

interface WaitlistFormProps {
  variant: 'desktop' | 'tablet' | 'mobile';
}

export function WaitlistForm({ variant }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const result = await addToWaitlist(email);

      if (result.success) {
        toast.success(result.message || 'Successfully joined the waitlist!');
        setEmail(''); // Clear form on success
      } else {
        toast.error(result.message || 'Failed to join waitlist');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  // Desktop styling
  if (variant === 'desktop') {
    return (
      <form
        onSubmit={handleSubmit}
        className="content-stretch flex gap-[0.83vw] items-center relative shrink-0 w-full"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={isLoading}
          className="basis-0 bg-[#faf9f6] grow min-h-px min-w-px relative rounded-[8px] shrink-0 border border-[lightgrey] font-normal text-[#024a60] placeholder:text-[#adaebc] focus:outline-none focus:ring-2 focus:ring-[#024a60] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ height: '3.47vw', paddingLeft: '1.11vw', paddingRight: '1.11vw', fontSize: '1.11vw', fontVariationSettings: "'wdth' 100" }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#024a60] box-border content-stretch flex gap-[0.69vw] items-center justify-center relative rounded-[8px] shrink-0 hover:bg-[#035a73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ height: '3.33vw', paddingLeft: '1.67vw', paddingRight: '1.67vw', paddingTop: '0.69vw', paddingBottom: '0.69vw' }}
        >
          <p className="font-medium leading-[normal] not-italic text-[#faf9f6] text-center text-nowrap whitespace-pre" style={{ fontSize: '1.11vw' }}>
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </p>
        </button>
      </form>
    );
  }

  // Tablet styling
  if (variant === 'tablet') {
    return (
      <form
        onSubmit={handleSubmit}
        className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[600px]"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={isLoading}
          className="basis-0 bg-[#faf9f6] grow h-[50px] min-h-px min-w-px relative rounded-[8px] shrink-0 border border-[lightgrey] px-[16px] font-normal text-[16px] text-[#024a60] placeholder:text-[#adaebc] focus:outline-none focus:ring-2 focus:ring-[#024a60] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontVariationSettings: "'wdth' 100" }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#024a60] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0 hover:bg-[#035a73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p className="font-medium leading-[normal] not-italic text-[#faf9f6] text-[16px] text-center text-nowrap whitespace-pre">
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </p>
        </button>
      </form>
    );
  }

  // Mobile styling
  return (
    <form
      onSubmit={handleSubmit}
      className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        disabled={isLoading}
        className="basis-0 bg-[#faf9f6] grow h-[50px] min-h-px min-w-px relative rounded-[8px] shrink-0 border border-[lightgrey] px-[16px] font-normal text-[16px] text-[#024a60] placeholder:text-[#adaebc] focus:outline-none focus:ring-2 focus:ring-[#024a60] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontVariationSettings: "'wdth' 100" }}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#024a60] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0 hover:bg-[#035a73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <p className="font-medium leading-[normal] not-italic text-[#faf9f6] text-[16px] text-center text-nowrap whitespace-pre">
          {isLoading ? 'Joining...' : 'Join Waitlist'}
        </p>
      </button>
    </form>
  );
}
