"use client";

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

import axios from 'axios';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import FileUpload from '../FileUpload';
import { useRouter } from 'next/navigation';


const formSchema = z.object({
    name: z.string().min(1, { message: 'Server name is required' }),
    imgUrl: z.string().min(0, { message: 'Server Image is required' }),
});

const InitailModal = () => {

    const [isMounted, setIsMounted] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            imgUrl: '',
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post('/api/servers', values);

            form.reset();
            router.refresh();
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    if (!isMounted) {
        return null;
    }

    return ( 
        <div>
            <Dialog open>
                <DialogContent className="bg-white text-black p-0 overflow-hidden">
                    <DialogHeader className="pt-8 px-6">
                        <DialogTitle className="text-2xl text-center font-bold">
                            Customize your server
                        </DialogTitle>
                        <DialogDescription className="text-center text-zinc-500">
                            Give your server a name and upload an image. You can always change this later.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}> 
                        <form action=""  onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                            <div className='space-y-8 px-6'>
                                <div className='flex items-center justify-center text-center'>
                                    <FormField
                                        control={form.control}
                                        name='imgUrl'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <FileUpload
                                                        endPoint='serverImage'
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    
                                </div>
                                <FormField 
                                    control={form.control}
                                    name='name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                                Server Name 
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isLoading}
                                                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black'
                                                    placeholder='Enter server name'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <DialogFooter className='bg-gray-100 px-6 py-4'>
                                    <Button variant='primary' disabled={isLoading}>
                                        Create Server
                                    </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
     );
}
 
export default InitailModal;