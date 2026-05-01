import crypto from 'crypto';

export const generateFileHash = (fileBuffer) => {
    return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}