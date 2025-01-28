'use client';
import DropdownBio from '@/app/[lang]/(dashboard)/(main)/bio-pages/components/dropdown-bio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Eye } from 'lucide-react';
import Link from 'next/link';

interface BioPageProps {
  bio: any;
}

const BioCard = ({ bio }: BioPageProps) => {
  return (
    <div className='right-0 z-50 h-full w-full flex-none'>
      {' '}
      <Card className='h-full overflow-hidden'>
        <CardHeader>
          <div className='flex items-start justify-end'>
            <DropdownBio />
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Avatar className='h-16 w-16 lg:h-24 lg:w-24'>
              <AvatarImage src={bio?.image} alt='' />
              <AvatarFallback>{bio?.title.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className='mt-3 text-lg font-semibold text-default-900 lg:text-xl'>
              {bio?.title}
            </div>
            <div className='line-clamp-2 text-center text-sm text-default-600'>
              <Link href={bio?.url} target='_blank' rel='noopener noreferrer'>
                {bio?.url}
              </Link>
            </div>
          </div>
        </CardHeader>

        <CardContent className='h-[calc(100%-260px)] overflow-hidden border-0 px-0'>
          <div className='flex items-center justify-start gap-6 px-4 py-3.5'>
            <div className='flex gap-4'>
              <div className='h-4 w-4 text-default-400'>
                <Eye />
              </div>
              <p className='text-base font-medium text-default-800'>
                {bio?.views} Views
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='h-4 w-4 text-default-400'>
                <Calendar />
              </div>
              <p className='text-base font-medium text-default-800'>
                {bio?.createdAt ? (
                  <time
                    dateTime={new Date(bio.createdAt).toISOString()}
                    title={new Date(bio.createdAt).toLocaleString()}
                  >
                    {`${Math.ceil(
                      (Date.now() - new Date(bio.createdAt).getTime()) /
                        (1000 * 60 * 60 * 24),
                    )} days ago`}
                  </time>
                ) : (
                  <span>&mdash;</span>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BioCard;
