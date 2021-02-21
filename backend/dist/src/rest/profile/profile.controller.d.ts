/// <reference types="multer" />
import { Request } from 'express';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    uploadFile(file: Express.Multer.File, req: Request): Promise<{
        fileName: string;
        mimetype: string;
    }>;
}
